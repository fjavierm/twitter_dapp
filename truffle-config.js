const path = require("path");

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        },
    },
    contracts_directory: path.join(__dirname, "src/contracts"),
    contracts_build_directory: path.join(__dirname, "src/abis"),
    compilers: {
        solc: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}