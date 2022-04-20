import styled from "styled-components";
export const Container = styled.div`
    margin-top: 4rem;
    max-width: 1128px;
    margin: 0 auto;

    table{
    
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            text-align: center;
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem, 2rem,;
        }
        td{
            text-align: center;
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child{
                color: var(--text-title);
            }
            &.deposit{
                color: var(--green);
            }
            &.withdraw{
                color: var(--red);
            }
        }
    }

`