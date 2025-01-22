import Heading from "./ui/heading";

const CategoryTop = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-8 md:gap-0 md:flex-row">
        <Heading variant="h3">Shop</Heading>
        <p>
          <span className="font-bold">Home</span> Shop
        </p>
      </div>
    </>
  );
};

export default CategoryTop;
