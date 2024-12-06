import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/card/card";
import { Company } from "../../types/company";
import s from "./catalog.module.scss";
import { companiesArray } from "../../data/companies.ts";

export const Catalog = () => {
    const [companies, setCompanies] = useState<Company[]>(companiesArray);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

    // Загружаем данные из localStorage
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("companies") || "[]");
        setCompanies(localData);
    }, []);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSort = () => {
        const sortedCompanies = [...companies].sort((a, b) => {
            return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
        });
        setCompanies(sortedCompanies);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const filteredCompanies = companies.filter((company) =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Card className={s.catalog}>
            <div style={{ backgroundColor: "#F4F4F9" }}>
                <h1>Каталог компаний</h1>
                <div className={s.controls}>
                    <input
                        type="text"
                        placeholder="Поиск по названию"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <button onClick={handleSort}>
                        Сортировать по рейтингу ({sortOrder === "asc" ? "↑" : "↓"})
                    </button>
                </div>
                <div className={s.companyList}>
                    {filteredCompanies.map((company) => (
                        <Link
                            to={`/catalog/${company.id}`}
                            key={company.id}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div className={s.companyCard}>
                                <img src={company.photo} alt={company.name} className={s.photo} />
                                <h2>{company.name}</h2>
                                <p>{company.description}</p>
                                <div className={s.rating}>
                                    Рейтинг: {company.rating.toFixed(1)} ⭐
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Card>
    );
};
