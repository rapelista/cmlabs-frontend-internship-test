import { useParams } from "react-router-dom";
import { useGetMealsByArea } from "../hooks/useGetMealsByArea";
import { Spinner } from "../components/Spinner";
import { Card } from "../components/Card";

export const MealsByAreaPage = () => {
    const { mealArea } = useParams();
    const {
        data,
        isLoading,
    } = useGetMealsByArea(mealArea);

    return (
        <div className="container mx-auto mt-8">
            {
                isLoading ? (
                    <div className="flex items-center justify-center w-full h-full">
                        <Spinner />
                    </div>
                ) : data && (
                    <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-4">
                        {data.meals.map(({
                            idMeal,
                            strMeal,
                            strMealThumb,
                        }) => (
                            <Card
                                to={`${idMeal}`}
                                key={idMeal}
                                name={strMeal}
                                thumbnail={strMealThumb}
                            />
                        ))}
                    </div>
                )
            }
        </div >
    );
};