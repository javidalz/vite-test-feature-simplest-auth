export const Table = (props) => {
    const { data, rowProps, colProps, ...restProps } = props

    return (
        <table {...restProps}>
            {data.map((row, i) => (
                <tr key={i} {...rowProps}>
                    {row.map((column) => (
                        <td key={column} {...colProps}>
                            column
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    )
}
