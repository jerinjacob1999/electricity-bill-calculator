'use client'
import Image from "next/image";
import styles from "./page.module.css";
import ItemForm, { Item } from "./components/ItemForm";
import ItemList from "./components/ItemList";
import { useState } from "react";



export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => {
    setItems([...items, item]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <main className={styles.main}>
      <h2 className="result-title gradient-text" >Electricity Bill Calculator</h2>
      <ItemForm onAddItem={handleAddItem}/>
      <ItemList items={items} onRemoveItem={handleRemoveItem} />
    </main>
  );
}
