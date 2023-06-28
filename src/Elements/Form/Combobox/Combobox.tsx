import React, { InputHTMLAttributes, useState } from "react";
import { Grid, Input, List, ListItem } from "../..";
import { iconNames, Icon } from "../../../Icons/Icons";

import './Combobox.css';

/**
 * @typedef {Object} ComboboxProps - Props for Combobox component
 * @property {string} [label] - Label for the input field
 * @property {string[]} options - List of options to display in the dropdown
 * @property {boolean} [multiple] - Whether the user can select multiple options
 * @property {boolean} [search] - Whether the user can search/filter the options
 * @extends InputHTMLAttributes<HTMLInputElement>
 */

interface ComboboxProps extends InputHTMLAttributes<HTMLInputElement> {
  // Own attributes
  label?: string,
  options: string[],
  multiple?: boolean,
  search?: string,
}

/**
 * Combobox component renders a Combobox input field
 * @param {ComboboxProps} rest - Props for Combobox component
 * @returns {JSX.Element} Combobox component
 */
export const Combobox: React.FC<ComboboxProps> = ({
  children,
  ...rest
}) => {

  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleInput = (e: React.BaseSyntheticEvent) => {
    setSearchText(e.target.value);
      setShowResults(true);
  }

  const handleClick = () => {
    if(showResults === false) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }

  const handleOptionClick = (e: React.BaseSyntheticEvent, option: string) => {
    setShowResults(false);
    let tmpResult: string[] = [...result];
    if (rest.multiple === false) {
      tmpResult = [option];
      setSearchText(tmpResult[0]);
    } else {
      if (tmpResult.includes(option)) {
        tmpResult = tmpResult.filter((value) => value !== option);
      } else {
        tmpResult.push(option);
      }
      setSearchText(tmpResult.join(", "));
    }
    setResult(tmpResult);
    if (rest.onSelect !== undefined) {
      rest.onSelect({ ...e, target: { value: tmpResult[0] }} as React.ChangeEvent<HTMLInputElement>)
    } else {
      if(process.env.NODE_ENV === "development") console.log("rest.onSelect === undefined");
    }  
  }; 

  const filteredOptions = () => {
    if (!rest.search) return rest.options;
    if (rest.multiple) {
      const tmpSearchText = searchText.split(", ");
      let result: string[] = [];
      tmpSearchText.forEach((text) => {
        const matched = rest.options.filter((option) => option.toLowerCase().indexOf(text.toLowerCase()) !== -1);
        result = [...result, ...matched];
      });
      result = result.filter((element, index) => result.indexOf(element) === index);
      return result;
    } else {
      return rest.options.filter((option) => option.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    }
  } 

  return (
    <div {...rest} className={`Container ${(rest.className !== undefined) ? rest.className : ""}`}>
      <Input className="InputOverwrite"
        label={ (rest !== undefined && rest.label !== undefined) ? rest.label : "" } 
        data-testid="combobox-input" id={(rest !== undefined && rest.id !== undefined) ? rest.id : ""}
        type="text"
        value={searchText}
        onClick={handleClick}
        onChange={handleInput}>
      </Input>
      {showResults && (
        <Grid className="OptionContainer" data-testid="combobox-option-container">
          <List marker="none" style={{ padding: "0px"}}>
            {filteredOptions().map((option, index) => {
              return (result.includes(option)) 
                ? <ListItem key={index} // Already selected
                    onClick={(e: React.BaseSyntheticEvent) => handleOptionClick(e, option)}>
                      { (iconNames.includes(option)) 
                        ? <Icon name={option} className="combobox-icon" />
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="combobox-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                      }
                      {option}
                  </ListItem>
                : <ListItem key={index}
                    onClick={(e: React.BaseSyntheticEvent) => handleOptionClick(e, option)}>
                      { (iconNames.includes(option)) 
                        ? <Icon name={option} className="combobox-icon" />
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="combobox-icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      }
                      {option}
                  </ListItem>
            })}
          </List>
        </Grid>
      )}
    </div>
  );
};