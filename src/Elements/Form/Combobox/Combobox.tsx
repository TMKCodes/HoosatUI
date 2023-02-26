import React, { InputHTMLAttributes, useState } from "react";
import { Grid, Input, List, ListItem } from "../..";

import './Combobox.scss';

interface ComboboxType extends InputHTMLAttributes<HTMLInputElement> {
  // Own attributes
  label?: string,
  options: string[],
  multiple?: boolean,
  search?: boolean,
}

export const Combobox: React.FC<ComboboxType> = (data) => {

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
    if(data.multiple === false) {
      tmpResult = [option];
      setSearchText(tmpResult.join(""));
    } else {
      if(tmpResult.includes(option)) {
        tmpResult = tmpResult.filter(value => value !== option);
      } else {
        tmpResult.push(option);
      }
      console.log(tmpResult);
      setSearchText(tmpResult.join(", "));
    }
    setResult(tmpResult);
    if(data.onSelect !== undefined) {
      data.onSelect({ ...e, target: { value: tmpResult[0] }} as React.ChangeEvent<HTMLInputElement>)
    } else {
      console.log("data.onSelect === undefined");
    }
  };

  const filteredOptions = () => {
    if(data.search === true) {
      if(data.multiple === false) {
        return data.options.filter((option) => option.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
      } else {
        let tmpSearchText = searchText.split(", ");
        let result: string[] = [];
        tmpSearchText.forEach((text) => {
          let matched = data.options.filter((option) => option.toLowerCase().indexOf(text.toLowerCase()) !== -1);
          result = [...result, ...matched];
          console.log(result);
        })
        result = result.filter((element, index) => result.indexOf(element) === index);
        console.log(result);
        return result;
      }
    }
    return data.options;
  }

  return (
    <div className="Container">
      <Input className="InputOverwrite" 
        label={ (data !== undefined && data.label !== undefined) ? data.label : "" } 
        data-testid="Combobox-input" id={(data !== undefined && data.id !== undefined) ? data.id : ""}
        type="text"
        value={searchText}
        onClick={handleClick}
        onChange={handleInput}>
      </Input>
      {showResults && (
        <Grid className="OptionContainer">
          <List marker="none" style={{ padding: "0px"}}>
            {filteredOptions().map((option, index) => {
              return (result.includes(option)) 
                ? <ListItem key={index} // Already selected
                    onClick={(e: React.BaseSyntheticEvent) => handleOptionClick(e, option)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block pr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      {option}
                  </ListItem>
                : <ListItem key={index}
                    onClick={(e: React.BaseSyntheticEvent) => handleOptionClick(e, option)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block pr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      {option}
                  </ListItem>
            })}
          </List>
        </Grid>
      )}
    </div>
  );
};