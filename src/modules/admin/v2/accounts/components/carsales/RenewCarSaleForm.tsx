import React, { useEffect, useState } from "react";
import { apiGetPackages } from "@/modules/admin/v2/package/services";
import { apiRenewCarSaleExpiry } from "@/modules/admin/v2/accounts/services/carSaleService";
import { IPackage, PackageCategory } from "@/modules/admin/v2/package/interfaces";
type IModalComponentProps = { data: any; hide: () => void };
import ModalBody from "@/components/ModalBody";
import ModalFooter from "@/components/ModalFooter";
import useMutation from "@/hooks/useMutation";
import { useQueryClient } from "@tanstack/react-query";

const RenewCarSaleForm = ({ data, hide }: IModalComponentProps) => {
  const [packages, setPackages] = useState<IPackage[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: () => apiRenewCarSaleExpiry(data.id, selectedPackage),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-get-all-business-listings"] });
      hide();
    },
    onError: () => setError("Failed to renew. Please try again."),
  });

  useEffect(() => {
    apiGetPackages().then((res) => {
      setPackages(res.data || []);
    });
  }, []);

  const filteredPackages = packages.filter(pkg => pkg.category === PackageCategory.CarSale);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackage) {
      setError("Please select a package.");
      return;
    }
    setError(null);
    mutate(undefined);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ModalBody>
        <div className="mb-4">
          <label htmlFor="package" className="block mb-2 font-semibold">Select Package</label>
          <select
            id="package"
            className="w-full border rounded p-2"
            value={selectedPackage}
            onChange={e => setSelectedPackage(e.target.value)}
            disabled={isPending}
          >
            <option value="">-- Select a package --</option>
            {filteredPackages.map(pkg => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name} - {pkg.price} {pkg.currency} ({pkg.validity} days)
              </option>
            ))}
          </select>
        </div>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        {isSuccess && <div className="text-green-500 mb-2">Renewed successfully!</div>}
      </ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-secondary mr-2" onClick={hide} disabled={isPending}>Cancel</button>
        <button type="submit" className="btn btn-primary" disabled={isPending}>
          {isPending ? "Renewing..." : "Renew"}
        </button>
      </ModalFooter>
    </form>
  );
};

export default RenewCarSaleForm; 