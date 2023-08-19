import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Pagination from "@/Components/Homepage/Pagination";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-white">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center
            gap-5 p-5">
            <NewsList news={props.news.data}/>
            </div>
            <div className="flex justify-center items-center">
                <Pagination meta={props.news.meta}/>
            </div>
            </div>
    );
}
