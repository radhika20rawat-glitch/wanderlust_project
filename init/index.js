require("dotenv").config();
console.log("Mapbox token loaded:", !!process.env.MAP_TOKEN);

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const geocodingClient = mbxGeocoding({
    accessToken: process.env.MAP_TOKEN
});

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});

        const listingsWithGeometry = [];

        for (let obj of initData.data) {

            let response = await geocodingClient
                .forwardGeocode({
                    query: `${obj.location}, ${obj.country}`,
                    limit: 1
                })
                .send();

            let feature = response.body.features[0];

            if (!feature) {
                console.log("Location not found:", obj.location);
                continue;
            }

            listingsWithGeometry.push({
                ...obj,
                geometry: feature.geometry,
                owner: "6addd49ea6648483ae45b34c"
            });
        }

        await Listing.insertMany(listingsWithGeometry);

        console.log("Data was initialised successfully!");

    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.connection.close();
    }
};

main()
    .then(initDB)
    .catch(console.log);
