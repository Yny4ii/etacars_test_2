import React, { ChangeEvent, useState } from "react";
import { Currency } from "../../interfaces/Currency";
import { useAppDispatch } from "../../hooks/hooks";
import { addCurrencyToWallet } from "../../redux/slices/walletSlice";
import { checkInput } from "../../helpers/checkInput";

interface ModalProps {
  setActive: (option: boolean) => void;
  selectedCurrency: Currency | null;
}

const Modal = ({ setActive, selectedCurrency }: ModalProps) => {
  const dispatch = useAppDispatch();
  const reg = /^([0-9]+)(\.)?([0-9]+)?$/;
  const [input, setInput] = useState<string>("");
  const [warningActive, setWarningActive] = useState<boolean>(false);
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onAddButton = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      reg.test(input) &&
      selectedCurrency &&
      input !== "0" &&
      checkInput(input)
    ) {
      setActive(false);
      dispatch(
        addCurrencyToWallet({
          id: selectedCurrency.id,
          name: selectedCurrency.name,
          price: parseFloat(selectedCurrency.priceUsd),
          count: Number(input),
        })
      );
    } else {
      setWarningActive(true);
    }
  };

  return (
    <div className="modal" onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <p>Enter the value and click add</p>
        <div className="modal__input-field">
          <form onSubmit={(e)=> onAddButton(e)}>
            <input
              onChange={(e) => onChangeInput(e)}
              value={input}
              autoFocus={true}
              className="modal__input"
              placeholder="Enter the value..."
            />
            <button className="add-button" onClick={(e) => onAddButton(e)}>
              Add
            </button>
          </form>
        </div>
        {warningActive && (
          <div className="modal__warning-message">
            Invalid value <br />
            (min - 0.00001, max - 100000000)
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
