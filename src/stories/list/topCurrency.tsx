import React from 'react';
import {Currency} from "../../interfaces/Currency";
import {floatFormat} from "../../helpers/floatFormat";
export interface TopCurrencyProps{
    topCurrencies:Currency[]
}
export const TopCurrency = ({topCurrencies}:TopCurrencyProps) => {
    return (
        <ul className="top-currency">
            {topCurrencies.map((e: Currency) => (
                <li className="top-currency__item" key={e.id}>
                    {e.name} - ${floatFormat(e.priceUsd)}
                </li>
            ))}
        </ul>
    );
};

