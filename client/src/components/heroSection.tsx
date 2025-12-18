import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


const HeroSection = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-row gap-3">
                            <Badge variant="secondary" className="inline-flex px-3 py-1 text-sm font-medium">
                                new
                                <ArrowUpRight className="ml-2 size-4" />
                            </Badge>
                            <Badge variant="destructive" className="inline-flex px-3 py-1 text-sm font-medium">
                                new
                                <ArrowUpRight className="ml-2 size-4" />
                            </Badge>
                            <Badge variant="outline" className="inline-flex px-3 py-1 text-sm font-medium">
                                new
                                <ArrowUpRight className="ml-2 size-4" />
                            </Badge>
                        </div>
                        <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
                            Cinemafy
                        </h1>
                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                            Welcome to Cinemafy, your ultimate destination for an immersive movie experience. Discover the latest films, reserve your seat, and enjoy the magic of cinema like never before.
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Button className="w-full sm:w-auto">
                                Discover our cinema
                            </Button>
                            <Button asChild variant="outline" className="w-full sm:w-auto">
                                <div>
                                    Reserve your seat
                                    <ArrowRight className="size-4" />
                                </div>
                            </Button>
                        </div>
                    </div>
                    <img
                        src="kino.jpg"
                        alt="cinema"
                        className="max-h-96 w-full rounded-md object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection