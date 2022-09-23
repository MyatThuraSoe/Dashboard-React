
import React from 'react';
import { useState, useEffect } from "react";
import { topCustomerList } from '../assets/data/topcustomerlist';
import '../style/topcustomers.css';
import { GrNext, GrPrevious } from 'react-icons/gr';

function TopCustomers(){
    let dataList = [...topCustomerList];
    const pageSize = 10;
    const checkNumberOfPages = Math.ceil(dataList.length / 10);
    const [watchedRows,setWatchedRows] = useState(0);
    const currentPageNumber = (watchedRows / pageSize);
   

     function sortCustomers() {
        let customerArray = [...topCustomerList];
        let ischanged = true;
        while(ischanged === true){
            ischanged = false;
            for(let i=0; i < customerArray.length - 1; i++){
                if (parseFloat(customerArray[i].spendamount) < parseFloat(customerArray[i+1].spendamount) ){
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
        setWatchedRows(10);
    },[]);

    useEffect(()=>{
        if(watchedRows > Math.ceil(dataList.length / 10) * 10 || watchedRows == 0 ){
            setWatchedRows(10);
            setTopCustomers(dataList.slice(0, pageSize));
        }
    },[watchedRows]);

    async function Next(){
        await setWatchedRows((preState) => preState + pageSize);
    }
    async function Previous(){
        await setWatchedRows((preState) => preState - pageSize);
    }

    
    return (
        <div className='topcustomers'>
            <h3>Top Customers</h3>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        topCustomers.map((customer, index) =>{
                            return (
                                <tr key={customer.id}>
                                    <td>{ customer.rank }</td>
                                    <td>{ customer.name }</td>
                                    <td>{ customer.spendamount } $</td>
                                </tr> 
                            )
                        })
                    }

                </tbody>
            </table>
            <div className='table-pagination'>
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
    )
}
export default TopCustomers;