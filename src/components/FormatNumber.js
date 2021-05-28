import React from "react";

const FormatNumber = ({ number }) => {
    return <span>{new Intl.NumberFormat().format(number)}</span>;
}

export default FormatNumber;
