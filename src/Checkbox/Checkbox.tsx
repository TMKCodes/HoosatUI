import React, { useState } from 'react';
import { ClassNamesType } from '../@types';
import { getClassNames } from '../Common/ClassNameHandler';

interface CheckboxType {
  options: string[];
  onChange: (selected: string[]) => void;
  className?: ClassNamesType;
}

export const Checkbox: React.FC<CheckboxType> = (data) => {
  const defaultClasses = {
    container: "flex flex-wrap p-2",
    label: "inline-flex items-center",
    input: "form-checkbox",
    span: "ml-2"
  };
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let tmpSelected = selected;
    if (tmpSelected.includes(value)) {
      tmpSelected = tmpSelected.filter((item) => item !== value);
    } else {
      tmpSelected = [...tmpSelected, value]
    }
    setSelected(tmpSelected);
    data.onChange(tmpSelected);
  };

  return (
    <div className={ getClassNames("container", data.className, defaultClasses) }>
      {data.options.map((option) => (
        <div key={option} className="mr-2 mb-2">
          <label className={ getClassNames("label", data.className, defaultClasses) }>
            <input
              type="checkbox"
              value={option}
              className={ getClassNames("input", data.className, defaultClasses) }
              checked={selected.includes(option)}
              onChange={handleChange}
            />
            <span className={ getClassNames("span", data.className, defaultClasses) }>{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
};