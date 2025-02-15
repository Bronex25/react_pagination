import { PropsForPag } from '../../utils';
import cn from 'classnames';

export const Pagination: React.FC<PropsForPag> = ({
  maxPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <>
      <ul className="pagination">
        <li
          className={cn('page-item', {
            disabled: currentPage === 1,
          })}
        >
          <a
            data-cy="prevLink"
            className="page-link"
            href="#prev"
            aria-disabled={currentPage === 1 ? 'true' : 'false'}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              if (currentPage > 1) {
                onPageChange(currentPage - 1);
              }
            }}
          >
            «
          </a>
        </li>

        {Array.from({ length: maxPages }).map((_, index) => (
          <li
            className={cn('page-item', {
              active: currentPage === index + 1,
            })}
            key={index}
            onClick={() => onPageChange(index + 1)}
          >
            <a data-cy="pageLink" className="page-link" href={`#${index + 1}`}>
              {index + 1}
            </a>
          </li>
        ))}

        <li
          className={cn('page-item', {
            disabled: currentPage === maxPages,
          })}
        >
          <a
            data-cy="nextLink"
            className="page-link"
            href="#next"
            aria-disabled={currentPage === maxPages ? 'true' : 'false'}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              if (currentPage < maxPages) {
                onPageChange(currentPage + 1);
              }
            }}
          >
            »
          </a>
        </li>
      </ul>
    </>
  );
};
