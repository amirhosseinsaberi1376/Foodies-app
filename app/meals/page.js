import Link from "next/link";

import { getMeals } from "@/lib/meals";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, Created{" "}
          <span className={classes.highlight}>By You</span>{" "}
        </h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
