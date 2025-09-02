import React, { useState } from "react";
import { Button } from "@/components/ui/button";

type AssetType = "car" | "property" | "laptop";

interface AddAssetModalProps {
    open: boolean;
    onClose: () => void;
    assetType: AssetType;
    onAdd: (data: any) => void;
}

export function AddAssetModal({ open, onClose, assetType, onAdd }: AddAssetModalProps) {
    const [form, setForm] = useState({ name: "", description: "" });

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-background rounded-xl p-8 w-full max-w-md shadow-lg relative">
                <h2 className="text-2xl font-heading font-bold mb-6 text-center">
                    Add New {assetType.charAt(0).toUpperCase() + assetType.slice(1)}
                </h2>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        onAdd(form);
                        setForm({ name: "", description: "" });
                        onClose();
                    }}
                    className="space-y-6"
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
                        placeholder="Description"
                        value={form.description}
                        onChange={e => setForm({ ...form, description: e.target.value })}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
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