import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { IoSearch } from "react-icons/io5";

import "./styles.css";
import { WrapperContainer2 } from '../WrapperContainers';
import { TextCard } from '../TextComponents';
import { InputCard } from '../InputsCards';
import { ScrollableWrapper } from '../ScrollableWrapper';

interface DropCardProps {
    title: string;
    array: { id: number; name: string }[];
    onClick: (value: any) => void;
    value: string;
    searchBox?: boolean;
    seeAllOption?: boolean;
}

const DropCard: React.FC<DropCardProps> = ({title, array=[], onClick, value, searchBox=true, seeAllOption=true}) => {

    const [searchValue, setSearchValue] = React.useState("");

    const filteredArray = searchValue.trim() === '' ? array : array.filter(item => item.name?.toLocaleLowerCase().includes(searchValue));

    return (
        <WrapperContainer2 padding={0} flexDirection='column' justifyContent='start' alignItems='start' gap={10}>
            <TextCard className='bold'>{title}</TextCard>

            <Dropdown className="dropdown-card-container">
                <Dropdown.Toggle id="dropdown-card-basic" className='dropdown-card-button'>
                    {(value == "" || !value) && "Todo" || 
                    <>
                        {array.find(item => item.id === Number(value))?.name}
                    </>
                    }
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-card-grid-container">
                    {searchBox &&
                        <InputCard
                            id={"search-icon-input"}
                            label={"Buscar"}
                            placeholder='Buscar'
                            onChange={(event) => {setSearchValue(event.toLocaleLowerCase())}}
                            defaultValue={searchValue}
                            className='dropdown-card-search-input'
                            required={false}
                            haveLabel={false}
                            icon={<IoSearch/>}
                        />  
                    }
                    
                    <ScrollableWrapper maxHeight={400}>
                        {seeAllOption &&
                            <Dropdown.Item onClick={() => onClick("")}>
                                <TextCard>Todo</TextCard>
                            </Dropdown.Item>
                        }
                        {filteredArray?.map((item: { name: string, id: number }, index: number) => (
                            <Dropdown.Item key={index} onClick={() => {
                                    onClick(item.id)
                                    setSearchValue("");
                                }}>
                                    <TextCard>
                                        {item.name}
                                    </TextCard>
                            </Dropdown.Item>
                        ))}
                    </ScrollableWrapper>
                </Dropdown.Menu>
            </Dropdown>  
        </WrapperContainer2>

    )
}

export { DropCard };