import styled from "styled-components";

export const ListCount = styled.p`
	margin-bottom: 20px;
`;

export const ReqButton = styled.button`
	line-height: 1;
	display: inline-block;
	font-size: 1.2rem;
	text-decoration: none;
	border-radius: 5px;
	color: #fff;
	padding: 8px;
	background-color: ${(props) => (props.isCreate ? "#e50914" : "#908f4b")};
`;

export const FormContainer = styled.div``;

export const Form = styled.div``;

export const TextRight = styled.div`
	text-align: right;
	padding-bottom: 20px;
	border-bottom: 1px solid #28333f;

	&:before {
		display: none;
	}
`;
