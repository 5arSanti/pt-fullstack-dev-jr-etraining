import { AiOutlineCloudUpload } from "react-icons/ai";
import "./styles.css";
import React, { FC } from "react";

interface InputsProps {
    type?: string;
    id: string;
    label: string;
    placeholder?: string;
    onChange: (value: any) => void;
    required?: boolean;
    defaultValue?: string;
    className?: string;
    haveLabel?: boolean;
    icon?: React.ReactNode;
    array?: Array<any>;
    none?: boolean;
    padding?: React.CSSProperties["padding"];
    filesArray?: Array<any>;
    multiple?: boolean;
    info?: string;
    accept?: string;
}

const InputCard: FC<InputsProps> = ({
    type="text", 
    id, 
    label, 
    placeholder="placeholder", 
    onChange, 
    required=true, 
    defaultValue="", 
    className="input-container", 
    haveLabel=true,
    icon
}) => {

    return (
        <div className={`${className}`}>
            {haveLabel && <label htmlFor={id}>{label} {required && "*"}</label>}
            
            <div className="icon-input-container">
                {icon && icon}

                <input
                    type={type}
                    placeholder={placeholder}
                    name={id}
                    id={id}
                    onChange={(event) => {onChange(event.target.value)}}
                    required={required}
                    defaultValue={defaultValue}
                />
            </div>
        </div>
    );
}

const OptionInputCard: FC<InputsProps> = ({
    id, 
    label, 
    array,
    onChange, 
    defaultValue="", 
    none=false, 
    padding=15,
    required=false
}) => {

    return(
        <div className="input-container">
            <label htmlFor={id}>{label} </label>
            <select 
                name={id} 
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
                value={defaultValue}
                style={{padding: padding}}
                required={required}
            >
                {none && 
                    <option value="">Seleccionar</option>
                }
                {array && array?.map((item, index) => (
                    <option 
                        key={index}
                        value={item?.id || item}
                    >
                        {item?.Nombre || item}
                    </option>
                ))}
            </select>
        </div> 
    );
}

const TextAreaCard: FC<InputsProps> = ({id, label, placeholder="placeholder", onChange, required=true, defaultValue=""}) => {
    return(
        <div className="input-container">
            <label htmlFor={id}>{label} {required && "*"}</label>
            <textarea
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
                required={required}
                defaultValue={defaultValue}
            />
        </div>
    );
}

const UploadFileCard: FC<InputsProps> = ({
    id, 
    label="Cargar Archivo", 
    onChange, 
    filesArray, 
    multiple=false, 
    info="Archivos PDF (.pdf) o Excel (.xlsx)", 
    accept=".pdf, .xlsx"
}) => {
    const array = filesArray ? [...filesArray] : null;

    return(
        <label htmlFor={id} className="upload-file-container">
            <input
                id={id}
                name={id}
                type="file"
                accept={accept}
                onChange={(event) => {onChange(event)}}
                onClick={(event) => {
                    const element = event.currentTarget as HTMLInputElement
                    element.value = "";
                }}
                multiple={multiple}
            />
            <span>
                <AiOutlineCloudUpload/>
            </span>
            <div className="upload-file-info-container">
                <p>{label}</p>
                {array && array?.length !== 0 ? filesArray?.map((item, index) => (
                    <p className="info-text" key={index}>{`(${index + 1})`} {item.name}</p>
                ))
                :
                <p>{info}</p>
            }
            </div>

        </label>
    );
}


export { InputCard, OptionInputCard, TextAreaCard, UploadFileCard };