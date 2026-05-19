import { useState, useRef } from "react";

const PRODUCTS = [
  { name: "Bar Napkins Box Paper Printed", category: "Napkins", material: "Paper", colors: ["White","Kraft Brown","Custom Printed"], hasDimensions: false },
  { name: "Business Cards", category: "Print", material: "Card Stock", colors: ["White","Cream","Gloss White"], hasDimensions: false },
  { name: "Carbon Sales Book", category: "Print", material: "Carbonless Paper", colors: ["White/Yellow","White/Yellow/Pink"], hasDimensions: false },
  { name: "Chicken Bucket", category: "Food Packaging", material: "Paperboard", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "COGS Coming In", category: "Internal", material: "Various", colors: ["N/A"], hasDimensions: false },
  { name: "Cups Paper", category: "Cups", material: "Paper", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Cups Plastic", category: "Cups", material: "PET Plastic", colors: ["Clear","Frosted","Custom Printed"], hasDimensions: false },
  { name: "Deli Paper", category: "Food Packaging", material: "Deli Paper", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Foil/Wax Paper", category: "Food Packaging", material: "Foil/Wax", colors: ["Silver Foil","Gold Foil","White Wax","Custom Printed"], hasDimensions: false },
  { name: "Food Box", category: "Food Packaging", material: "Corrugated Cardboard", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Food Safety Bag", category: "Bags", material: "Poly", colors: ["Clear","White","Custom Printed"], hasDimensions: false },
  { name: "Fries Pails", category: "Food Packaging", material: "Paperboard", colors: ["White","Red","Custom Printed"], hasDimensions: false },
  { name: "Fries Waxed Bag", category: "Bags", material: "Waxed Paper", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Garment Bag", category: "Bags", material: "Poly", colors: ["Clear","White","Black","Custom Printed"], hasDimensions: false },
  { name: "Garment Bag Rolls Printed", category: "Bags", material: "Poly Roll", colors: ["Clear","White","Custom Printed"], hasDimensions: false },
  { name: "Gift Card Holders", category: "Gift", material: "Card Stock", colors: ["White","Black","Custom Printed"], hasDimensions: false },
  { name: "Gift Cards Printed", category: "Gift", material: "PVC / Card Stock", colors: ["White","Black","Metallic","Custom Printed"], hasDimensions: false },
  { name: "Insulated NW Bag", category: "Bags", material: "Non-Woven + Foil Lining", colors: ["Black","Navy","Red","Custom Printed"], hasDimensions: false },
  { name: "Item Specifications", category: "Internal", material: "Various", colors: ["N/A"], hasDimensions: false },
  { name: "Labels (Sticker)", category: "Labels", material: "Paper / Vinyl", colors: ["White","Clear","Metallic","Custom Printed"], hasDimensions: false },
  { name: "Lids", category: "Cups", material: "Plastic", colors: ["Clear","White","Black"], hasDimensions: false },
  { name: "Lids Flat", category: "Cups", material: "Plastic", colors: ["Clear","White","Black"], hasDimensions: false },
  { name: "Magnets", category: "Print", material: "Magnetic Sheet", colors: ["Custom Printed"], hasDimensions: false },
  { name: "Merchandise Bag", category: "Bags", material: "Poly", colors: ["White","Black","Clear","Custom Printed"], hasDimensions: false },
  { name: "Mis-print", category: "Internal", material: "Various", colors: ["N/A"], hasDimensions: false },
  { name: "Misl.", category: "Internal", material: "Various", colors: ["N/A"], hasDimensions: false },
  { name: "Napkin Dinner 3 ply", category: "Napkins", material: "Paper 3-ply", colors: ["White","Ivory","Custom Printed"], hasDimensions: false },
  { name: "Napkins Bar 2 ply", category: "Napkins", material: "Paper 2-ply", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Napkins Dinner 2 ply", category: "Napkins", material: "Paper 2-ply", colors: ["White","Ivory","Custom Printed"], hasDimensions: false },
  { name: "Napkins Dispenser", category: "Napkins", material: "Paper", colors: ["White","Custom Printed"], hasDimensions: false },
  { name: "Non Woven Bags", category: "Bags", material: "Non-Woven PP", colors: ["White","Black","Navy","Red","Green","Custom Printed"], hasDimensions: false },
  { name: "NW T-shirt Bag", category: "Bags", material: "Non-Woven PP", colors: ["White","Black","Custom Printed"], hasDimensions: false },
  { name: "Paper Bag", category: "Bags", material: "Kraft Paper", colors: ["Kraft Brown","White","Black","Custom Printed"], hasDimensions: false },
  { name: "Paper Bag: Envelopes", category: "Bags", material: "Paper", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Paper Bag: Kraft Paper Bag", category: "Bags", material: "Kraft Paper", colors: ["Kraft Brown","White","Custom Printed"], hasDimensions: false },
  { name: "Paper Bag: Paper Merchandise Bag", category: "Bags", material: "Paper", colors: ["White","Black","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Paper Bag: SOS Bag", category: "Bags", material: "Kraft Paper", colors: ["Kraft Brown","White","Custom Printed"], hasDimensions: false },
  { name: "Paper Board", category: "Packaging", material: "Paperboard", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Paper Boat", category: "Food Packaging", material: "Paperboard", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Pillow Box", category: "Gift", material: "Paperboard", colors: ["White","Black","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Pizza Boxes Printed", category: "Food Packaging", material: "Corrugated Cardboard", colors: ["White","Kraft","Custom Printed"], hasDimensions: true },
  { name: "Placemats", category: "Food Packaging", material: "Paper", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Plastic Bags", category: "Bags", material: "LDPE Plastic", colors: ["Clear","White","Black","Custom Printed"], hasDimensions: false },
  { name: "Plastic Bags: Die Cut Bag", category: "Bags", material: "LDPE/HDPE", colors: ["Clear","White","Black","Custom Printed"], hasDimensions: false },
  { name: "Plastic Bags: Folded Handle Bag", category: "Bags", material: "LDPE", colors: ["White","Black","Clear","Custom Printed"], hasDimensions: false },
  { name: "Plastic Bags: Merchandise Bag", category: "Bags", material: "LDPE", colors: ["White","Clear","Custom Printed"], hasDimensions: false },
  { name: "Plastic Bags: Patch Handle Bag", category: "Bags", material: "LDPE/HDPE", colors: ["White","Black","Custom Printed"], hasDimensions: false },
  { name: "Plastic Bags: Rigid Handle Bag", category: "Bags", material: "HDPE", colors: ["White","Black","Custom Printed"], hasDimensions: false },
  { name: "Plastic Bags: Rope Handle Bag", category: "Bags", material: "LDPE + Rope", colors: ["White","Black","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Plastic Bags: Snap Handle Bags", category: "Bags", material: "PP Plastic", colors: ["Clear","White","Black","Custom Printed"], hasDimensions: false },
  { name: "Plastic Bags: Soft Loop Handle Bag", category: "Bags", material: "LDPE", colors: ["White","Black","Custom Printed"], hasDimensions: false },
  { name: "Plastic Bags: T-Shirt Bag", category: "Bags", material: "HDPE", colors: ["White","Black","Custom Printed"], hasDimensions: false },
  { name: "Plastic Bags: Trifold Handle Bag", category: "Bags", material: "LDPE", colors: ["White","Black","Custom Printed"], hasDimensions: false },
  { name: "Plates", category: "Food Packaging", material: "Paper / Foam", colors: ["White","Custom Printed"], hasDimensions: false },
  { name: "Poly Mailers", category: "Bags", material: "Polyethylene", colors: ["White","Black","Custom Printed"], hasDimensions: false },
  { name: "Printed Adhesive Tape", category: "Print", material: "BOPP Tape", colors: ["Custom Printed"], hasDimensions: false },
  { name: "Printed Bar Napkins", category: "Napkins", material: "Paper 2-ply", colors: ["White","Custom Printed"], hasDimensions: false },
  { name: "Printed Chopsticks", category: "Utensils", material: "Bamboo / Wood", colors: ["Natural","Custom Printed Wrapper"], hasDimensions: false },
  { name: "Printed Dinner Napkins", category: "Napkins", material: "Paper", colors: ["White","Ivory","Custom Printed"], hasDimensions: false },
  { name: "Printed Gift Box Paper", category: "Gift", material: "Coated Paper", colors: ["White","Custom Printed"], hasDimensions: false },
  { name: "Printed Tissue", category: "Gift", material: "Tissue Paper", colors: ["White","Black","Colored","Custom Printed"], hasDimensions: false },
  { name: "Printed Wax Paper", category: "Food Packaging", material: "Waxed Paper", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Printed Zip Lock Bags", category: "Bags", material: "LDPE / BOPP", colors: ["Clear","White","Custom Printed"], hasDimensions: false },
  { name: "Ribbon", category: "Gift", material: "Satin / Grosgrain", colors: ["White","Black","Gold","Silver","Red","Custom Printed"], hasDimensions: false },
  { name: "Rigid Box", category: "Gift", material: "Rigid Paperboard", colors: ["White","Black","Custom Printed"], hasDimensions: true },
  { name: "Rope/Ribbon Handle Bag", category: "Bags", material: "Paper + Rope", colors: ["White","Black","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Sample", category: "Internal", material: "Various", colors: ["N/A"], hasDimensions: false },
  { name: "Sandwich Paper Bag", category: "Bags", material: "Paper", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Sealing Film Rolls", category: "Packaging", material: "PET/PE Film", colors: ["Clear","Custom Printed"], hasDimensions: false },
  { name: "Sealing Machines", category: "Equipment", material: "N/A", colors: ["N/A"], hasDimensions: false },
  { name: "Shopping Cart", category: "Equipment", material: "N/A", colors: ["N/A"], hasDimensions: false },
  { name: "Sleeve Printed", category: "Cups", material: "Paper", colors: ["Custom Printed"], hasDimensions: false },
  { name: "Soup Bowls", category: "Food Packaging", material: "Paper / Foam", colors: ["White","Custom Printed"], hasDimensions: false },
  { name: "Stock Tissue", category: "Gift", material: "Tissue Paper", colors: ["White","Black","Red","Blue","Pink","Green"], hasDimensions: false },
  { name: "Take Out Box", category: "Food Packaging", material: "Paperboard", colors: ["White","Kraft","Custom Printed"], hasDimensions: true },
  { name: "Tie Tray", category: "Food Packaging", material: "Paperboard / Plastic", colors: ["White","Clear","Custom Printed"], hasDimensions: false },
  { name: "TSB KH Glatt 12x7x24", category: "Bags", material: "Poly", colors: ["White","Custom Printed"], hasDimensions: false },
  { name: "Umbrella", category: "Accessories", material: "Polyester / Nylon", colors: ["Black","Custom Printed"], hasDimensions: false },
  { name: "Utensil Bag", category: "Bags", material: "Paper / Poly", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Vendor Error", category: "Internal", material: "Various", colors: ["N/A"], hasDimensions: false },
  { name: "Vendors Discount", category: "Internal", material: "Various", colors: ["N/A"], hasDimensions: false },
  { name: "Wave Top Handle Waxed Paper Bag", category: "Bags", material: "Waxed Paper", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
  { name: "Wet Napkin", category: "Napkins", material: "Non-Woven", colors: ["White","Custom Printed"], hasDimensions: false },
  { name: "Woven Bag", category: "Bags", material: "Woven PP", colors: ["White","Black","Custom Printed"], hasDimensions: false },
  { name: "Wrapping Paper Gift", category: "Gift", material: "Coated Paper", colors: ["White","Kraft","Custom Printed"], hasDimensions: false },
];

const SIZES = ["XS","S","M","L","XL","XXL","Custom"];
const CATEGORIES = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.category))).sort()];

const ITEM_VISUALS = {
  "Bags": "🛍️",
  "Food Packaging": "📦",
  "Napkins": "🧻",
  "Gift": "🎁",
  "Print": "🖨️",
  "Cups": "🥤",
  "Labels": "🏷️",
  "Packaging": "📫",
  "Utensils": "🥢",
  "Equipment": "🔧",
  "Accessories": "☂️",
  "Internal": "🗂️",
};

export default function CatalogApp() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [customW, setCustomW] = useState("");
  const [customH, setCustomH] = useState("");
  const [customD, setCustomD] = useState("");
  const [design, setDesign] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [step, setStep] = useState(1);
  const fileRef = useRef();

  const filtered = PRODUCTS.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || p.category === category;
    return matchSearch && matchCat;
  });

  function selectProduct(p) {
    setSelected(p);
    setColor("");
    setSize("");
    setCustomW(""); setCustomH(""); setCustomD("");
    setDesign(null);
    setPreviewUrl(null);
    setStep(1);
  }

  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    setDesign(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  }

  function canPreview() {
    return selected && color && (size || customW);
  }

  const emoji = selected ? (ITEM_VISUALS[selected.category] || "📦") : null;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0f0f",
      fontFamily: "'DM Mono', 'Fira Mono', 'Courier New', monospace",
      color: "#f0ede6",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <header style={{
        borderBottom: "1px solid #2a2a2a",
        padding: "18px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#111"
      }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.15em", color: "#e8c84a" }}>
            PACK PLUS PRINTING
          </div>
          <div style={{ fontSize: 11, color: "#666", letterSpacing: "0.2em", marginTop: 2 }}>
            PRODUCT CATALOG
          </div>
        </div>
        <div style={{ fontSize: 12, color: "#444", letterSpacing: "0.1em" }}>
          {PRODUCTS.length} PRODUCTS
        </div>
      </header>

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {/* Sidebar */}
        <aside style={{
          width: 300,
          borderRight: "1px solid #1e1e1e",
          display: "flex",
          flexDirection: "column",
          background: "#111"
        }}>
          {/* Search */}
          <div style={{ padding: "16px 16px 8px" }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products..."
              style={{
                width: "100%",
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: 4,
                padding: "8px 12px",
                color: "#f0ede6",
                fontSize: 12,
                outline: "none",
                boxSizing: "border-box",
                letterSpacing: "0.05em"
              }}
            />
          </div>
          {/* Category filter */}
          <div style={{ padding: "0 16px 12px", display: "flex", flexWrap: "wrap", gap: 6 }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setCategory(cat)} style={{
                background: category === cat ? "#e8c84a" : "#1a1a1a",
                color: category === cat ? "#0f0f0f" : "#888",
                border: "none",
                borderRadius: 3,
                padding: "4px 9px",
                fontSize: 10,
                cursor: "pointer",
                letterSpacing: "0.08em",
                fontFamily: "inherit"
              }}>
                {cat}
              </button>
            ))}
          </div>
          {/* Product list */}
          <div style={{ flex: 1, overflowY: "auto", padding: "0 8px 16px" }}>
            {filtered.map(p => (
              <div
                key={p.name}
                onClick={() => selectProduct(p)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 5,
                  cursor: "pointer",
                  background: selected?.name === p.name ? "#1e1c14" : "transparent",
                  borderLeft: selected?.name === p.name ? "3px solid #e8c84a" : "3px solid transparent",
                  marginBottom: 2,
                  transition: "all 0.15s"
                }}
              >
                <div style={{ fontSize: 12, color: selected?.name === p.name ? "#e8c84a" : "#ccc", lineHeight: 1.4 }}>
                  {ITEM_VISUALS[p.category] || "📦"} {p.name}
                </div>
                <div style={{ fontSize: 10, color: "#555", marginTop: 2 }}>{p.category} · {p.material}</div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ color: "#444", fontSize: 12, padding: 16, textAlign: "center" }}>No products found</div>
            )}
          </div>
        </aside>

        {/* Main panel */}
        <main style={{ flex: 1, padding: 36, overflowY: "auto" }}>
          {!selected ? (
            <div style={{ color: "#333", textAlign: "center", marginTop: 80 }}>
              <div style={{ fontSize: 48 }}>📋</div>
              <div style={{ fontSize: 14, marginTop: 12, letterSpacing: "0.15em" }}>SELECT A PRODUCT TO CONFIGURE</div>
            </div>
          ) : (
            <div style={{ maxWidth: 700 }}>
              {/* Product Header */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.2em", marginBottom: 6 }}>
                  {selected.category.toUpperCase()}
                </div>
                <h1 style={{ fontSize: 26, fontWeight: 700, margin: 0, color: "#f0ede6" }}>
                  {selected.name}
                </h1>
                <div style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
                  Material: <span style={{ color: "#aaa" }}>{selected.material}</span>
                </div>
              </div>

              {/* Steps */}
              <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
                {["Color","Size","Design","Preview"].map((s, i) => (
                  <div key={s} style={{
                    padding: "5px 14px",
                    borderRadius: 2,
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    background: step === i + 1 ? "#e8c84a" : step > i + 1 ? "#2a2a1a" : "#1a1a1a",
                    color: step === i + 1 ? "#0f0f0f" : step > i + 1 ? "#e8c84a" : "#444",
                    fontWeight: step === i + 1 ? 700 : 400
                  }}>
                    {i + 1}. {s.toUpperCase()}
                    {step > i + 1 && " ✓"}
                  </div>
                ))}
              </div>

              {/* Step 1: Color */}
              {step >= 1 && (
                <Section title="SELECT COLOR" done={!!color}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {selected.colors.map(c => (
                      <button key={c} onClick={() => { setColor(c); if (step === 1) setStep(2); }} style={{
                        background: color === c ? "#e8c84a" : "#1a1a1a",
                        color: color === c ? "#0f0f0f" : "#ccc",
                        border: `1px solid ${color === c ? "#e8c84a" : "#2a2a2a"}`,
                        borderRadius: 4,
                        padding: "8px 16px",
                        fontSize: 12,
                        cursor: "pointer",
                        fontFamily: "inherit",
                        letterSpacing: "0.05em",
                        transition: "all 0.15s"
                      }}>
                        {c}
                      </button>
                    ))}
                  </div>
                </Section>
              )}

              {/* Step 2: Size / Dimensions */}
              {step >= 2 && (
                <Section title={selected.hasDimensions ? "DIMENSIONS" : "SIZE"} done={!!(size || customW)}>
                  {selected.hasDimensions ? (
                    <div>
                      <div style={{ fontSize: 11, color: "#555", marginBottom: 12 }}>Enter dimensions (inches)</div>
                      <div style={{ display: "flex", gap: 12 }}>
                        {[["Width", customW, setCustomW], ["Height", customH, setCustomH], ["Depth", customD, setCustomD]].map(([label, val, setter]) => (
                          <div key={label}>
                            <div style={{ fontSize: 10, color: "#666", marginBottom: 4, letterSpacing: "0.1em" }}>{label}</div>
                            <input
                              value={val}
                              onChange={e => { setter(e.target.value); if (step === 2) setStep(3); }}
                              placeholder={`e.g. 12`}
                              style={{
                                width: 80,
                                background: "#1a1a1a",
                                border: "1px solid #2a2a2a",
                                borderRadius: 4,
                                padding: "8px 10px",
                                color: "#f0ede6",
                                fontSize: 13,
                                outline: "none",
                                fontFamily: "inherit"
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      {customW && <button onClick={() => setStep(3)} style={nextBtnStyle()}>Next →</button>}
                    </div>
                  ) : (
                    <div>
                      <div style={{ fontSize: 11, color: "#555", marginBottom: 10 }}>Enter custom measurements (inches)</div>
                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        {[["Width", customW, setCustomW], ["Height", customH, setCustomH]].map(([label, val, setter]) => (
                          <div key={label}>
                            <div style={{ fontSize: 10, color: "#666", marginBottom: 4, letterSpacing: "0.1em" }}>{label}</div>
                            <input
                              value={val}
                              onChange={e => setter(e.target.value)}
                              placeholder="e.g. 10"
                              style={{
                                width: 90,
                                background: "#1a1a1a",
                                border: "1px solid #2a2a2a",
                                borderRadius: 4,
                                padding: "8px 10px",
                                color: "#f0ede6",
                                fontSize: 13,
                                outline: "none",
                                fontFamily: "inherit"
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      {customW && <button onClick={() => setStep(3)} style={nextBtnStyle()}>Next →</button>}
                    </div>
                  )}
                </Section>
              )}

              {/* Step 3: Design Upload */}
              {step >= 3 && (
                <Section title="UPLOAD DESIGN" done={!!design}>
                  <div
                    onClick={() => fileRef.current.click()}
                    style={{
                      border: "2px dashed #2a2a2a",
                      borderRadius: 6,
                      padding: "28px",
                      textAlign: "center",
                      cursor: "pointer",
                      background: design ? "#1a1e14" : "#141414",
                      transition: "all 0.2s"
                    }}
                  >
                    <div style={{ fontSize: 28 }}>{design ? "✅" : "📤"}</div>
                    <div style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
                      {design ? design.name : "Click to upload design file (PNG, JPG, PDF, AI)"}
                    </div>
                    <input ref={fileRef} type="file" accept=".png,.jpg,.jpeg,.pdf,.ai,.svg" onChange={handleFileUpload} style={{ display: "none" }} />
                  </div>
                  <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                    <button onClick={() => setStep(4)} style={nextBtnStyle()}>
                      {design ? "Preview →" : "Skip & Preview →"}
                    </button>
                  </div>
                </Section>
              )}

              {/* Step 4: Preview */}
              {step >= 4 && (
                <Section title="ORDER SUMMARY" done={false}>
                  <div style={{
                    background: "#141414",
                    border: "1px solid #1e1e1e",
                    borderRadius: 8,
                    padding: 24,
                    display: "flex",
                    gap: 24,
                    alignItems: "flex-start"
                  }}>
                    {/* Visual mockup */}
                    <div style={{
                      width: 160,
                      height: 160,
                      background: "#1a1a1a",
                      borderRadius: 6,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: "1px solid #222",
                      position: "relative",
                      overflow: "hidden"
                    }}>
                      {previewUrl ? (
                        <img src={previewUrl} alt="Design" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                      ) : (
                        <>
                          <div style={{ fontSize: 52 }}>{emoji}</div>
                          <div style={{ fontSize: 9, color: "#555", marginTop: 6, textAlign: "center", padding: "0 8px", letterSpacing: "0.06em" }}>
                            {color.toUpperCase()}
                          </div>
                        </>
                      )}
                    </div>
                    {/* Details */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#e8c84a", marginBottom: 12 }}>
                        {selected.name}
                      </div>
                      {[
                        ["Material", selected.material],
                        ["Color", color],
                        ["Width", customW ? `${customW}"` : "—"],
                        ["Height", customH ? `${customH}"` : "—"],
                        selected.hasDimensions ? ["Depth", customD ? `${customD}"` : "—"] : null,
                        ["Design File", design ? design.name : "None uploaded"],
                      ].filter(Boolean).map(([k, v]) => (
                        <div key={k} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #1e1e1e", padding: "6px 0", fontSize: 12 }}>
                          <span style={{ color: "#555", letterSpacing: "0.1em" }}>{k}</span>
                          <span style={{ color: "#ccc" }}>{v}</span>
                        </div>
                      ))}
                      <button
                        onClick={() => alert("Order submitted! Our team will contact you shortly.")}
                        style={{
                          marginTop: 18,
                          background: "#e8c84a",
                          color: "#0f0f0f",
                          border: "none",
                          borderRadius: 4,
                          padding: "10px 24px",
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          cursor: "pointer",
                          fontFamily: "inherit"
                        }}
                      >
                        SUBMIT ORDER →
                      </button>
                    </div>
                  </div>
                </Section>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function Section({ title, done, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <div style={{ width: 3, height: 14, background: "#e8c84a", borderRadius: 2 }} />
        <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#888" }}>{title}</div>
        {done && <div style={{ fontSize: 10, color: "#e8c84a" }}>✓</div>}
      </div>
      {children}
    </div>
  );
}

function nextBtnStyle() {
  return {
    marginTop: 14,
    background: "transparent",
    color: "#e8c84a",
    border: "1px solid #e8c84a",
    borderRadius: 4,
    padding: "7px 18px",
    fontSize: 11,
    cursor: "pointer",
    letterSpacing: "0.12em",
    fontFamily: "inherit"
  };
}
