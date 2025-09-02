import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface AddAssetModalProps {
  open: boolean;
  onClose: () => void;
  assetType: "car";
  onAdd: (data: any) => void;
}

export function AddAssetModal({ open, onClose, assetType, onAdd }: AddAssetModalProps) {
  const [form, setForm] = useState({
    name: "",
    modelNo: "",
    location: "",
    description: "",
    status: 0,
    assetTypeId: 1,
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-background rounded-xl p-8 w-full max-w-md shadow-lg relative">
        <h2 className="text-2xl font-heading font-bold mb-6 text-center">
          Add New Vehicle
        </h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            onAdd(form);
            setForm({
              name: "",
              modelNo: "",
              location: "",
              description: "",
              status: 0,
              assetTypeId: 1,
            });
            onClose();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full border rounded px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="Model No"
            value={form.modelNo}
            onChange={e => setForm({ ...form, modelNo: e.target.value })}
            className="w-full border rounded px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={form.location}
            onChange={e => setForm({ ...form, location: e.target.value })}
            className="w-full border rounded px-4 py-2"
            required
          />

          <select
            value={form.status}
            onChange={e => setForm({ ...form, status: Number(e.target.value) })}
            className="w-full border rounded px-4 py-2"
            required
          >
            <option value={0}>Inactive</option>
            <option value={1}>Maintenance</option>
            <option value={2}>Active</option>
          </select>
          <div className="flex justify-end gap-4">
            <Button type="button" onClick={onClose} variant="outline">
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-white text-black border border-border hover:bg-gray-100 px-6 py-3 w-auto sm:w-auto"
            >
              Add {assetType}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}