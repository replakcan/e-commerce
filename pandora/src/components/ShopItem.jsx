import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useHistory } from "react-router-dom";

export default function TwoColumnCard({ product, src }) {

    const history = useHistory();

    const handleProductClick = () => {
        history.push("/shop")
    };

    return (
        <Card className="overflow-hidden w-[80%]">
            <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                    {/* Left Column */}
                    <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                            {product.name}
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6">
                            {product.description}
                        </p>
                        <Button variant="link" onClick={handleProductClick}>
                            Learn More
                        </Button>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1">
                        <img
                            src={src}
                            alt={product.name}
                            className="w-full h-48 sm:h-64 md:h-full object-cover"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
