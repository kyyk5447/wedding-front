import React, { useState } from 'react';
import { createPortal } from 'react-dom';

interface AmountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (amount: number, isCustom: boolean) => void;
}

export function AmountModal({ isOpen, onClose, onSelect }: AmountModalProps) {
  const [customAmount, setCustomAmount] = useState<number | null>(null); 
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null); 

  const handleSelect = () => {
    if (isCustom && (customAmount === null || customAmount <= 0)) return;

    onSelect(isCustom ? customAmount as number : selectedAmount as number, isCustom);
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-sm">
        <h2 className="text-lg font-semibold mb-4">金額を選択してください</h2>
        <div className="flex flex-col gap-2 mb-4">
          <button
            className="p-3 bg-green-200 text-green-800 rounded shadow hover:bg-green-300"
            onClick={() => {
              setSelectedAmount(1000);
              setIsCustom(false);
            }}
          >
            1000円
          </button>
          <button
            className="p-3 bg-green-200 text-green-800 rounded shadow hover:bg-green-300"
            onClick={() => {
              setSelectedAmount(10000);
              setIsCustom(false);
            }}
          >
            10000円
          </button>
          <button
            className="p-3 bg-green-200 text-green-800 rounded shadow hover:bg-green-300"
            onClick={() => {
              setIsCustom(true);
              setSelectedAmount(null); // Reset selected amount
            }}
          >
            カスタム
          </button>
        </div>

        {isCustom && (
          <div className="mb-4">
            <input
              type="number"
              value={customAmount !== null ? customAmount : ""}
              onChange={(e) => setCustomAmount(Number(e.target.value))}
              placeholder="カスタム金額"
              className="block rounded-lg px-2.5 py-2 w-full text-sm text-green-800 bg-green-100 border border-b-2 border-green-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-800"
            />
          </div>
        )}

        <div className="flex gap-2">
          <button
            className="p-3 bg-green-700 text-white rounded shadow hover:bg-green-800"
            onClick={handleSelect}
          >
            確定
          </button>
          <button
            className="p-3 bg-gray-300 text-white rounded shadow hover:bg-gray-400"
            onClick={onClose}
          >
            閉じる
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}