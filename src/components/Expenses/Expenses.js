import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const Amadeh = props.items.filter(function (noteItem) {
    return noteItem.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {Amadeh.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          Amadeh.map(function (item, index) {
            return (
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            );
          })
        )}
      </Card>
    </div>
  );
};

export default Expenses;
