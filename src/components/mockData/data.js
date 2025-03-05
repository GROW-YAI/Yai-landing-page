export const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "#home"
    },

    {
        id: 2,
        title: "About",
        hasDropdown: true,
        subMenu: [
            { id: 21, title: "About Innovator", link: "#about_innovator" },
            { id: 22, title: "About Product", link: "#about_product" }
        ]
    },

    {
        id: 3,
        title: "Product",
        link: "#products"
    },

    {
        id: 4,
        title: "Vision",
        link: "#vision"
    },

    // {
    //     id: 5,
    //     title: "Blog",
    //     link: "/blog"
    // },

    {
        id: 6,
        title: "Contact",
        link: "#contacts"
    },
];
