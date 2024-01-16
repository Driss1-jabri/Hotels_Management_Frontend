
import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function WithoutCancelDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="text-danger">
            <Rating value={3} readOnly onChange={(e) => setValue(e.value)} cancel={false} />
        </div>
    );
}
        