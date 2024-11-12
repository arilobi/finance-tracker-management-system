import React from "react";
import { useState } from "react";

function TransactionForm() {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [transactionType, setTransactionType] = useState("");

    const handleSubmit = (e) => 
        e.preventDefault();

    if (!name || !amount || !date || !transactionType) {
        alert("All fields are required")
        retunn;
    }

    const newTransaction = {
        name: name,
    }
}

export default TransactionForm;