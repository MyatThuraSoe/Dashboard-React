
import React from 'react';
import { useState, useEffect } from "react";
import { customerList } from '../assets/data/customerlist';
import '../style/customers.css';
import { GrNext, GrPrevious } from 'react-icons/gr';


function Customers(){
    let dataList = [...customerList];
    const pageSize = 15;
    const checkNumberOfPages = Math.ceil(dataList.length / pageSize);
    const [watchedRows,setWatchedRows] = useState(0);
    const currentPageNumber = (watchedRows / pageSize);
   

     function sortCustomers() {
        let customerArray = [...customerList];
        let ischanged = true;
        while(ischanged === true){
            ischanged = false;
            for(let i=0; i < customerArray.length - 1; i++){
                if (parseFloat(customerArray[i].spentAmount) < parseFloat(customerArray[i+1].spentAmount) ){
                    let item = customerArray[i];
                    customerArray[i] = customerArray[i+1];
                    customerArray[i+1] = item;
                    ischanged = true;
                }
            }
        }
        return [...customerArray];
    }
    dataList = sortCustomers();
    dataList = dataList.map((data, index)=>{
        data['rank'] = index + 1;
        return data;
    });
    const [topCustomers, setTopCustomers] = useState(dataList.slice(watchedRows, watchedRows + pageSize));    
    
    useEffect(()=>{
        setWatchedRows(pageSize);
    },[]);

    useEffect(()=>{
        if(watchedRows > Math.ceil(dataList.length / pageSize) * pageSize || watchedRows == 0 ){
            setWatchedRows(pageSize);
            setTopCustomers(dataList.slice(0, pageSize));
        }
    },[watchedRows]);

    async function Next(){
        await setWatchedRows((preState) => preState + pageSize);
    }
    async function Previous(){
        await setWatchedRows((preState) => preState - pageSize);
    }
    async function first() {
        await setWatchedRows(pageSize);
    }

    return(
        <div className='customers-page'>
            <h3>Customers of Glory Taste</h3>
            <div className='customers-page-table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Registered Date</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            topCustomers.map((customer, index) =>{
                                return (
                                    <tr key={customer.id}>
                                        <td>{ customer.rank }</td>
                                        <td>{ customer.name }</td>
                                        <td>{ customer.email }</td>
                                        <td>{ customer.spentAmount } $</td>
                                        <td>{ customer.registeredDate }</td>
                                        <td>{ customer.address }</td>
                                    </tr> 
                                )
                            })
                        }

                    </tbody>
                </table>
                <div className='table-pagination'>
                    <button className='paginate-buttons' onClick={(e) => {
                        e.preventDefault();
                        first();
                        setTopCustomers(dataList.slice(0,pageSize));
                    }}> First </button>
                    { currentPageNumber != 1 && 
                    <button className='paginate-buttons' onClick={(e) => {
                        e.preventDefault();
                        Previous();
                        setTopCustomers(dataList.slice((currentPageNumber - 2) * pageSize, (currentPageNumber * pageSize) - pageSize));
                    }}> <GrPrevious/> </button> }
                    <span className='paginate-page-number'>{ currentPageNumber }</span>
                    { currentPageNumber < checkNumberOfPages && 
                        <button className='paginate-buttons' onClick={(e) => {
                            e.preventDefault();
                            Next();
                            setTopCustomers(dataList.slice(watchedRows, watchedRows + pageSize));
                        }}> <GrNext/> </button>
                    }
                </div>
            </div>
        </div>
    )
}
export default Customers;