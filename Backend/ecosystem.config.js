modele.exports={
    apps: [
        {
            name: "inventory-management",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV:"develoment",
                ENV_VAR1:"environmet-variable"
            },
        },
    ],
};