import template from "../assets/drawing-template.png";
import template2 from "../assets/drawing-template2.png";
import netfil from "../assets/netfil.png";

export default function DrawingPreview({ data, rows, previewRef, editRow, deleteRow }) {

    const notesTop = 170 + (rows.length - 1) * 35;

    return (
        <div
            ref={previewRef}
            className="relative bg-white mx-auto pt-3 px-3"
            style={{
                width: "794px",
                height: "1123px",
            }}
        >
            <img
                src={template}
                alt=""
                className="w-[200px] absolute top-[10px] right-[-10px]"
            />

            <div>
                <div className="absolute top-[230px] right-[50px]">
                    <svg width="180" height="220" viewBox="0 0 180 220">

                        {/* Outer Frame */}
                        <rect
                            x="40"
                            y="20"
                            width="80"
                            height="120"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                        />

                        {/* Inner Frame */}
                        <rect
                            x="50"
                            y="30"
                            width="60"
                            height="100"
                            fill="none"
                            stroke="black"
                            strokeWidth="1.5"
                        />

                        {/* Filter Pleats */}
                        {Array.from({ length: 18 }).map((_, i) => (
                            <line
                                key={i}
                                x1="55"
                                y1={35 + i * 5}
                                x2="105"
                                y2={35 + i * 5}
                                stroke="black"
                                strokeWidth="1"
                            />
                        ))}

                        {/* Vertical Dimension B */}

                        <line x1="150" y1="20" x2="150" y2="140" stroke="black" />

                        <polygon points="147,25 150,15 153,25" fill="black" />
                        <polygon points="147,135 150,145 153,135" fill="black" />

                        <line x1="120" y1="20" x2="160" y2="20" stroke="black" />
                        <line x1="120" y1="140" x2="160" y2="140" stroke="black" />

                        <text
                            x="155"
                            y="95"
                            fontSize="10"
                            transform="rotate(-90 155 85)"
                        >
                            B
                        </text>

                        {/* Horizontal Dimension A */}

                        <line x1="40" y1="170" x2="120" y2="170" stroke="black" />

                        <polygon points="45,167 40,170 45,173" fill="black" />
                        <polygon points="115,167 120,170 115,173" fill="black" />

                        <line x1="40" y1="140" x2="40" y2="180" stroke="black" />
                        <line x1="120" y1="140" x2="120" y2="180" stroke="black" />

                        <text
                            x="77"
                            y="185"
                            fontSize="10"
                        >
                            A
                        </text>

                    </svg>

                    <div className="text-center font-bold text-md">
                        FRONT VIEW
                    </div>
                </div>
                <div className="absolute top-[230px] right-[-100px]">
                    <svg width="120" height="220" viewBox="0 0 120 220">

                        {/* Outer Frame */}
                        <rect
                            x="45"
                            y="20"
                            width="30"
                            height="150"
                            fill="none"
                            stroke="black"
                            strokeWidth="1.5"
                        />

                        {/* Pleated Media */}
                        <path
                            d="
                                    M45 25
                                    L75 35
                                    L45 45
                                    L75 55
                                    L45 65
                                    L75 75
                                    L45 85
                                    L75 95
                                    L45 105
                                    L75 115
                                    L45 125
                                    L75 135
                                    L45 145
                                    L75 155
                                    L45 165
                                "
                            fill="none"
                            stroke="black"
                            strokeWidth="1"
                        />

                        {/* Dimension Arrow Left */}
                        <line x1="20" y1="30" x2="20" y2="160" stroke="black" />
                        <polygon points="17,35 20,25 23,35" fill="black" />
                        <polygon points="17,155 20,165 23,155" fill="black" />

                        <text
                            x="20"
                            y="90"
                            fontSize="10"
                            transform="rotate(-90 25 100)"
                        >
                            CXD
                        </text>

                        {/* Bottom Depth E */}
                        <line x1="45" y1="185" x2="75" y2="185" stroke="black" />

                        <polygon points="50,182 45,185 50,188" fill="black" />
                        <polygon points="70,182 75,185 70,188" fill="black" />

                        <text x="58" y="200" fontSize="10">
                            E
                        </text>

                        {/* Extension Lines */}
                        <line x1="45" y1="170" x2="45" y2="190" stroke="black" />
                        <line x1="75" y1="170" x2="75" y2="190" stroke="black" />

                    </svg>

                    <div className="text-center font-bold">
                        SIDE VIEW
                    </div>
                </div>
            </div>

            <div
                className="
                    absolute
                    top-[200px]
                    right-[-10px]
                    w-[200px]
                    text-center
                    font-bold   
                    text-md
                    py-2 text-red-600
                "
            >
                {data.holesType} ON FLANGE
            </div>

            {/* TOP TABLE */}

            <div className="absolute left-[5%] top-[20px]">
                <table className="border-collapse text-center text-xs w-[530px]">
                    <thead>
                        <tr>
                            <th
                                rowSpan="2"
                                className="border border-black px-2 py-2"
                            >
                                SR. NO
                            </th>

                            <th
                                rowSpan="2"
                                className="border border-black"
                            >
                                SIZE
                            </th>

                            <th
                                colSpan="2"
                                className="border border-black px-2 py-2"
                            >
                                FLANGE
                            </th>

                            <th
                                colSpan="2"
                                className="border border-black px-2 py-2"
                            >
                                BOX
                            </th>

                            <th
                                rowSpan="2"
                                className="border border-black px-2 py-2"
                            >
                                DEPTH
                            </th>

                            <th
                                rowSpan="2"
                                className="border border-black px-2 py-2"
                            >
                                CAPACITY CFM
                            </th>

                            <th
                                rowSpan="2"
                                className="border border-black px-2 py-2"
                            >
                                QTY NOS
                            </th>
                        </tr>

                        <tr>
                            <th className="border border-black px-2 py-1">
                                A
                            </th>

                            <th className="border border-black px-2 py-1">
                                B
                            </th>

                            <th className="border border-black px-2 py-1">
                                C
                            </th>

                            <th className="border border-black px-2 py-1">
                                D
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {rows.map((row, index) => (

                            <tr key={row.srNo}>

                                <td className="border border-black p-2">
                                    {row.srNo}
                                </td>

                                <td className="border border-black p-2">
                                    {row.size}
                                </td>

                                <td className="border border-black p-2">
                                    {row.flangeA}
                                </td>

                                <td className="border border-black p-2">
                                    {row.flangeB}
                                </td>

                                <td className="border border-black p-2">
                                    {row.boxC}
                                </td>

                                <td className="border border-black p-2">
                                    {row.boxD}
                                </td>

                                <td className="border border-black p-2">
                                    {row.depthE}
                                </td>

                                <td className="border border-black p-2">
                                    {row.capacityCFM}
                                </td>

                                <td className="border border-black p-2">
                                    {row.qtyNos}
                                </td>

                            </tr>

                        ))}

                    </tbody>
                </table>
            </div>

            {/* NOTES */}

            <div className="absolute left-[5%] text-[14px] font-serif"
                style={{ top: `${notesTop}px` }}
            >

                <p className="font-bold">1. ALL DIMENSIONS ARE IN MM</p>

                <p className="mt-2 font-bold">
                    2. MATERIAL OF CONSTRUCTION
                </p>

                <p className="ml-6">
                    <span className="font-bold">a. HOUSING -</span> {data.housing}
                </p>

                <p className="ml-6">
                    <span className="font-bold">b. FILTER MEDIA -</span> {data.filterMedia}
                </p>

                <p className="ml-12">
                    (Pleated Type - {data.pleatedType})
                </p>

                <p><span className="font-bold">3. GRADE -</span> {data.grade}</p>

                <p>
                    <span className="font-bold">4. MICRON RATING -</span> {data.micronRating} <span>MICRON</span>
                </p>

                <p>
                    <span className="font-bold">5. EFFICIENCY - </span> {data.efficiency} <span>MICRON</span>
                </p>

                <p>
                    <span className="font-bold">6. INITIAL PRESSURE DROP -</span> {data.initialPressureDrop}
                </p>

                <p>
                    <span className="font-bold">7. FINAL PRESSURE DROP -</span> {data.finalPressureDrop}
                </p>

                <p>
                    <span className="font-bold">8. Media Bonding -</span> {data.mediaBonding}
                </p>

                <p>
                    <span className="font-bold">9. Guard -</span> {data.guard}
                </p>

                <p>
                    <span className="font-bold">10. Gasket -</span> {data.gasket}
                </p>

                <p>
                    <span className="font-bold">11. Maxi. Operating Temp -</span> {data.maxOperatingTemp}
                </p>

                <p>
                    <span className="font-bold">12. NO OF FOLDS -</span> {data.noOfFolds}
                </p>

            </div>

            {/* TOLERANCE */}

            <div className="absolute left-[20%]"
                style={{
                    top: `${520 + (rows.length - 1) * 35}px`
                }}>

                <h3 className="font-bold text-lg">
                    Tolerance :
                </h3>

                <p>
                    <span className="font-bold">1. Dimension -</span> {data.dimensionTolerance}
                </p>

                <p>
                    <span className="font-bold">2. Diagonal -</span> {data.diagonalTolerance}
                </p>

            </div>

            {/* TITLE BLOCK */}

            {/* <div className="absolute top-[500px] right-[-150px] w-[33%] text-[8px]">

                <p>
                    CLIENT: {data.client}
                </p>

                <p>
                    DRG. NO.: {data.drawingNo}
                </p>

                <p>
                    REV. NO.: {data.revNo}
                </p>

                <p>
                    DATE: {data.date}
                </p>

                <p>
                    SCALE: {data.scale}
                </p>

                <p>
                    DRN BY: {data.drawnBy}
                </p>

                <p>
                    CHD BY: {data.checkedBy}
                </p>

                <p>
                    APPD BY: {data.approvedBy}
                </p>

                <div className="mt-3 text-center absolute right-[260px] top-[50px] text-[8px] w-full">
                    <h2 className="font-bold text-xl">
                        {data.title}
                    </h2>

                    <h3 className="font-bold">
                        {data.subtitle}
                    </h3>
                </div>
            </div> */}

            {/* TITLE BLOCK */}

            <div
                className="absolute top-[500px] right-[-90px]"
                style={{
                    width: "430px",
                    fontSize: "10px",
                }}
            >
                <table className="border-collapse border border-black w-full">
                    <tbody>

                        {/* CLIENT */}
                        <tr>
                            <td
                                className="border border-black font-bold p-1"
                                colSpan="4"
                            >
                                CLIENT:
                            </td>

                            <td
                                className="border border-black p-1"
                                colSpan="4"
                            >
                                {data.client}
                            </td>
                        </tr>

                        {/* REF */}
                        <tr>
                            <td
                                className="border border-black font-bold p-1"
                                colSpan="4"
                            >
                                REF:
                            </td>

                            <td
                                className="border border-black p-1"
                                colSpan="4"
                            >
                                {data.poNo}
                            </td>
                        </tr>

                        {/* TITLE */}
                        <tr>

                            <td
                                className="border border-black p-1 text-center font-bold"
                                colSpan="6"
                                rowSpan="3"
                            >
                                <div>
                                    <img
                                        src={netfil}
                                        alt=""
                                        className="w-[300px] my-1 absolute top-[0px]"
                                    />
                                </div>
                                <p className="pt-18">
                                    <b>
                                        Survey No. 77/7, Vishnu-Malti Ind. Estate, A/p.Shivane. Tal. Haveli, Pune-23
                                        Tel.: 020 25293424, Telex.: 020 25293424
                                    </b>
                                </p>
                                <div className="text-lg font-bold">
                                    TITLE: {data.title}
                                </div>
                            </td>
                        </tr>

                        {/* DRG NO */}
                        <tr>
                            <td
                                className="border border-black font-bold p-1"
                                colSpan="2"
                            >
                                DRG. NO.
                            </td>
                        </tr>

                        <tr>
                            <td
                                className="border border-black p-1"
                                colSpan="2"
                            >
                                {data.drawingNo}
                            </td>
                        </tr>

                        {/* REV */}
                        <tr>
                            <td
                                className="border border-black font-bold p-1"
                                colSpan="2"
                            >
                                REV-00
                            </td>

                            <td
                                className="border border-black font-bold p-1"
                                colSpan="2"
                            >
                                DRN BY
                            </td>

                            <td
                                className="border border-black p-1"
                                colSpan="2"
                            >
                                {data.drawnBy}
                            </td>

                            <td
                                className="border border-black font-bold p-1"
                            >
                                CHD BY
                            </td>

                            <td
                                className="border border-black p-1"
                            >
                                {data.checkedBy}
                            </td>
                        </tr>

                        {/* DATE */}
                        <tr>
                            <td
                                className="border border-black font-bold p-1"
                                colSpan="2"
                            >
                                DATE
                            </td>

                            <td
                                className="border border-black p-1"
                                colSpan="2"
                            >
                                {data.date}
                            </td>

                            <td
                                className="border border-black font-bold p-1"
                                colSpan="2"
                            >
                                SCALE
                            </td>

                            <td
                                className="border border-black p-1"
                                colSpan="2"
                            >
                                {data.scale}
                            </td>
                        </tr>

                        {/* SHEET */}
                        <tr>
                            <td
                                className="border border-black font-bold p-1"
                            >
                                NO. OF SHEET
                            </td>

                            <td
                                className="border border-black text-center"
                            >
                                1
                            </td>

                            <td
                                className="border border-black font-bold p-1"
                            >
                                SHEET NO.
                            </td>

                            <td
                                className="border border-black text-center"
                            >
                                1
                            </td>

                            <td
                                className="border border-black font-bold p-1"
                            >
                                APPD BY
                            </td>

                            <td
                                className="border border-black p-1"
                                colSpan="3"
                            >
                                {data.approvedBy}
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}