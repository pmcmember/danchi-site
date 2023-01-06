import { ColumnsListChild } from './ColumnsListChild'
import { ColumnsListParent } from './ColumnsListParent'

/**  for example
 *
 * <ColumnsListParent>
 *    {data.map((datum) => (
 *        <ColumnsListChild>
 *             {datum.text}
 *        </ColumnsListChild>
 *    ))}
 * </ColumnsListParent>
 *
 */

export {
    ColumnsListChild,
    ColumnsListParent,
    ColumnsListParent as Parent,
    ColumnsListChild as Child,
}
