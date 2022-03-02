import styled from "styled-components";

export const Tr = styled.tr`
	tr {
		display: table-row;
		padding-bottom: 10px;
		padding: 10px;

		&:nth-child(2n + 2) td {
			background-color: #242e39;
		}
	}
`;

export const Td = styled.td`
	border: 1px solid #28333f;
	text-align: left;
	padding: 10px 10px 0;

	&:before {
		content: attr(data-title);
		color: #7a91aa;
		display: none;
		font-size: 1.4rem;
		padding-right: 10px;
		text-align: right;
		width: 140px;
		padding: 10px;
	}
`;
