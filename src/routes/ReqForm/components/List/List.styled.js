import styled from "styled-components";

export const Table = styled.table`
	display: table;
	width: 100%;

	p {
		text-align: center;
		margin: 20px 0 60px;
	}
	h1 {
		text-align: center;
		font-weight: 300;
	}

	tr {
		display: table-row;
		padding-bottom: 10px;
		padding: 10px;
		td {
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
		}
		&:nth-child(2n + 2) td {
			background-color: #242e39;
		}
	}
`;

export const Thead = styled.thead`
	display: table-header-group;
	th {
		background-color: #202932;
		color: #fff;
		border: 1px solid #202932;
	}
`;

export const Tbody = styled.tbody`
	display: table-row-group;
`;

export const Tfoot = styled.tfoot`
	display: table-footer-group;
	th {
		display: table-cell;
		padding: 10px;
		text-align: center;
		color: #b8c4d2;
	}
`;

export const Th = styled.th`
	text-align: left;
	font-weight: 700;
	display: table-cell;
`;
