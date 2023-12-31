import { useState } from 'react';

export default function Footer() {
    let [year, setYear] = useState(new Date().getFullYear());
    return (
        <footer>Portfolio Hub | Copyright © {year}</footer>
    )
}