import React from "react";
import Item from "./Item";

function List({ formList }) {
    console.log(formList);
    return (
        <div className="List">
            <table>
                <thead>
                    <tr>
                        <th>genre</th>
                        <th>제목</th>
                        <th>date</th>
                        <th>User</th>
                        <th className="text-right">status</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th colSpan="5">
                            <script
                                language="javascript"
                                type="text/javascript"
                            >
                                var today = new Date(); var year =
                                today.getFullYear(); document.write(year);
                            </script>
                        </th>
                    </tr>
                </tfoot>
                <tbody>
                    <Item {...formList} />
                </tbody>
            </table>
        </div>
    );
}

List.defaultProps = {
    formList: [],
};

export default List;
