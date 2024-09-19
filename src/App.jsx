import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function App() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [conditionError, setConditionError] = useState("");
  const [waterproof, setWaterproof] = useState(false);
  const [features, setFeatures] = useState([]);
  const [storageDate, setStorageDate] = useState(null);
  const [storageUnitNumber, setStorageUnitNumber] = useState(null);
  const [unitCost, setUnitCost] = useState(null);
  const [vendorName, setVendorName] = useState("");
  const [formData, setFormData] = useState(false);

  const waterproofHandler = (event) => {
    const checked = event.target.checked;
    if (checked) {
      setWaterproof(true);
    } else {
      setWaterproof(false);
    }
  };

  const conditionHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setConditionError("");
      setCondition(event.target.value);
    }
  };

  const featuresHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFeatures((prevVal) => [...prevVal, value]);
    } else {
      setFeatures((prevVal) => prevVal.filter((val) => val !== value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (
      productName &&
      quantity &&
      category &&
      condition &&
      storageDate &&
      storageUnitNumber &&
      unitCost &&
      vendorName
    ) {
      setFormData(true);
    } else {
      setConditionError("Please select one option.");
    }
  };

  return (
    <>
      <header className="bg-primary text-white py-3">
        <nav>
          <div className="container">
            <h5>
              <a className="navbar-brand">Store Hub</a>
            </h5>
          </div>
        </nav>
      </header>
      <main className="bg-dark text-white py-4">
        <div className="container">
          <h1>Inventory Form</h1>
          <form className="py-3" onSubmit={formHandler}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Product Name:
              </label>
              <input
                className="form-control"
                id="name"
                onChange={(event) => setProductName(event.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="quantity">
                Quantity:
              </label>
              <input
                className="form-control"
                id="quantity"
                type="number"
                onChange={(event) => setQuantity(event.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="category">
                Category:
              </label>
              <select
                className="form-select"
                id="category"
                onChange={(event) => setCategory(event.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="Clothing">Clothing</option>
                <option value="Footwear">Footwear</option>
                <option value="Equipment">Equipment</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Condition:</label>
              <div>
                <div className="form-check form-check-inline">
                  <label htmlFor="new">
                    <input
                      className="form-check-input"
                      id="new"
                      type="radio"
                      value="New"
                      name="condition"
                      onChange={conditionHandler}
                    />{" "}
                    New
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label htmlFor="used">
                    <input
                      className="form-check-input"
                      id="used"
                      type="radio"
                      value="Used"
                      name="condition"
                      onChange={conditionHandler}
                    />{" "}
                    Used
                  </label>
                </div>
              </div>
              {conditionError && <p>{conditionError}</p>}
            </div>

            <div className="mb-3">
              <div className="form-check">
                <label className="form-check-label" htmlFor="waterproof">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={waterproofHandler}
                  />{" "}
                  Waterproof
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Features:</label>
              <div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label" htmlFor="lightweight">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="lightweight"
                      value="Lightweight"
                      name="features"
                      onChange={featuresHandler}
                    />{" "}
                    Lightweight
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label" htmlFor="durable">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="durable"
                      value="Durable"
                      name="features"
                      onChange={featuresHandler}
                    />{" "}
                    Durable
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="date">
                Date of Storage:
              </label>
              <input
                className="form-control"
                type="date"
                id="date"
                onChange={(event) => setStorageDate(event.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="unitNumber">
                Storage Unit Number:
              </label>
              <input
                className="form-control"
                id="unitNumber"
                type="number"
                onChange={(event) => setStorageUnitNumber(event.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="unitCost">
                Unit Cost:
              </label>
              <input
                className="form-control"
                id="unitCost"
                type="number"
                onChange={(event) => setUnitCost(event.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="vendorName">
                Vendor Name:
              </label>
              <input
                className="form-control"
                id="vendorName"
                onChange={(event) => setVendorName(event.target.value)}
                required
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>

          {formData && (
            <div className="mt-2">
              <h2>Submitted Details: </h2>
              <p>Product Name: {productName}</p>
              <p>Quantity: {quantity}</p>
              <p>Category: {category}</p>
              <p>Condition: {condition}</p>
              <p>Waterproof: {waterproof ? "Yes" : "No"}</p>
              <p>
                Features: {features.length > 0 ? features.join(", ") : "none"}
                <p></p>Date of Storage: {storageDate}{" "}
              </p>
              <p>Storage Unit Number: {storageUnitNumber}</p>
              <p>Unit Cost: ${unitCost}</p>
              <p>Vendor Name: {vendorName}</p>
              <p>Total Cost: ${quantity * unitCost}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
