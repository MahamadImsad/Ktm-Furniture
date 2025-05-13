const Brand = () => {
    const brands = [
        {
            id: 1,
            image: "/src/assets/brands/brand_1.png",
            size: "w-24 h-16"
        },
        {
            id: 2,
            image: "/src/assets/brands/brand_2.png",
            size: "w-20 h-14"
        },
        {
            id: 3,
            image: "/src/assets/brands/brand_3.png",
            size: "w-28 h-20"
        },
        {
            id: 4,
            image: "/src/assets/brands/brand_4.png",
            size: "w-24 h-18"
        },
        {
            id: 5,
            image: "/src/assets/brands/brand_5.png",
            size: "w-20 h-16"
        },
        {
            id: 6,
            image: "/src/assets/brands/brand_6.png",
            size: "w-24 h-20"
        }, 
        {
            id: 7,
            image: "/src/assets/brands/brand_7.png",
            size: "w-28 h-16"
        }
    ];

    return (
        <div className="lg:container mx-auto">
            <div className="grid grid-cols-7 items-center justify-center gap-5">
                {brands.map((brand) => (
                    <div key={brand.id} className="brand_item">
                        <img className={`${brand.size} object-contain mx-auto`} src={brand.image} alt={`brand_${brand.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brand;
