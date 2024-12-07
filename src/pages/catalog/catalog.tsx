import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/card/card";
import { Company } from "../../types/company";
import s from "./catalog.module.scss";
import { companiesArray } from "../../data/companies.ts";

export const Catalog = () => {
    // Состояние для хранения списка компаний
    const [companies, setCompanies] = useState<Company[]>(companiesArray);

    // Состояние для хранения поискового запроса
    const [searchQuery, setSearchQuery] = useState("");

    // Состояние для хранения порядка сортировки по рейтингу
    const [ratingSortOrder, setRatingSortOrder] = useState<"asc" | "desc">("desc");

    // Состояние для хранения порядка сортировки по средней цене
    const [priceSortOrder, setPriceSortOrder] = useState<"asc" | "desc">("desc");

    // Загружаем данные компаний из localStorage при первом рендере
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("companies") || "[]");
        if (localData.length) {
            setCompanies(localData); // Если данные есть, используем их
        } else {
            // Если данных нет, используем заранее заданный массив
            setCompanies(companiesArray);
        }
    }, []);

    // Обработчик изменения поискового запроса
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    // Сортировка по рейтингу
    const handleRatingSort = () => {
        const sortedCompanies = [...companies].sort((a, b) => {
            return ratingSortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
        });
        setCompanies(sortedCompanies);
        setRatingSortOrder(ratingSortOrder === "asc" ? "desc" : "asc");
    };

    // Сортировка по средней цене
    const handlePriceSort = () => {
        const sortedCompanies = [...companies].sort((a, b) => {
            const priceA = Number(a.averagePrice) || 0; // Преобразуем в число
            const priceB = Number(b.averagePrice) || 0; // Преобразуем в число
            return priceSortOrder === "asc" ? priceA - priceB : priceB - priceA;
        });
        setCompanies(sortedCompanies);
        setPriceSortOrder(priceSortOrder === "asc" ? "desc" : "asc");
    };

    // Фильтрация компаний по поисковому запросу
    const filteredCompanies = companies.filter((company) =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Card className={s.catalog}>
            <div style={{ backgroundColor: "#F4F4F9" }}>
                <h1>Каталог компаний</h1>
                {/* Панель управления */}
                <div className={s.controls}>
                    <input
                        type="text"
                        placeholder="Поиск по названию"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <button onClick={handleRatingSort}>
                        Сортировать по рейтингу ({ratingSortOrder === "asc" ? "↑" : "↓"})
                    </button>
                    <button onClick={handlePriceSort}>
                        Сортировать по цене ({priceSortOrder === "asc" ? "↑" : "↓"})
                    </button>
                </div>
                {/* Список компаний */}
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
                                <div className={s.price}>
                                    Средняя цена: {company.averagePrice?.toLocaleString()} руб.
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Card>
    );
};
