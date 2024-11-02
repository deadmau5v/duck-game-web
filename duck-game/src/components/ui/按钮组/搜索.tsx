import { Search } from "lucide-react";
import { Button } from "../button";

export default function SearchButton() {
    return <>
        <Button title="搜索" style={{
            padding: 0,
            margin: 0,
        }}><Search /></Button>
    </>
}