-- 고객
CREATE TABLE channel_customer (
    customer_id VARCHAR(255) PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6)
);
INSERT INTO channel_customer (customer_id, customer_name) 
VALUES ('CUST-001', '김상훈');

-- 회원
-- customer : member = 1 : N
CREATE TABLE channel_member (
    member_id VARCHAR(255) PRIMARY KEY,
    customer_id VARCHAR(255) NOT NULL,
    member_name VARCHAR(255) NOT NULL,
    created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT fk_member_customer FOREIGN KEY (customer_id) REFERENCES channel_customer(customer_id)
);
INSERT INTO channel_member (member_id, customer_id, member_name) 
VALUES ('MEM-001', 'CUST-001', '김상훈_회원');

-- 계약
-- member : contract = 1 : N
CREATE TABLE channel_contract (
    contract_id VARCHAR(255) PRIMARY KEY,
    member_id VARCHAR(255) NOT NULL,
    product_code VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL, 
    monthly_amount DECIMAL(10, 2) NOT NULL,
    created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT fk_contract_member FOREIGN KEY (member_id) REFERENCES channel_member(member_id)
);
INSERT INTO channel_contract (contract_id, member_id, product_code, status, monthly_amount) 
VALUES ('CON-001', 'MEM-001', 'PREMIUM_SUBSCRIPTION', 'ACTIVE', 49000);

-- 청구
-- contract : billing = 1 : N
CREATE TABLE channel_billing (
    billing_id VARCHAR(255) PRIMARY KEY,
    contract_id VARCHAR(255) NOT NULL,
    billing_key VARCHAR(255) NOT NULL, -- PG 연동키
    status VARCHAR(50) NOT NULL, 
    created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT fk_billing_contract FOREIGN KEY (contract_id) REFERENCES channel_contract(contract_id)
);
INSERT INTO channel_billing (billing_id, contract_id, billing_key, status) 
VALUES ('001', 'CON-001', 'BILL_KEY_SHINHAN_1234', 'ACTIVE');

-- 5. 청구서
-- billing : invoice = 1 : N
CREATE TABLE channel_invoice (
    invoice_id VARCHAR(255) PRIMARY KEY,
    billing_id VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    due_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT fk_invoice_billing FOREIGN KEY (billing_id) REFERENCES channel_billing(billing_id)
);
INSERT INTO channel_invoice (invoice_id, billing_id, amount, due_date, status) 
VALUES ('INV-001', '001', 49000, '2025-12-31', 'PENDING');

-- 6. 결제
-- billing : payment = 1 : N
-- invoice : payment = 1 : 1
CREATE TABLE channel_payment (
    payment_id VARCHAR(255) PRIMARY KEY,
    billing_id VARCHAR(255) NOT NULL,
    invoice_id VARCHAR(255) UNIQUE NOT NULL,
    transaction_id VARCHAR(255) NOT NULL,
    amount BIGINT NOT NULL,
    status VARCHAR(50) NOT NULL,
    executed_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT fk_payment_billing FOREIGN KEY (billing_id) REFERENCES channel_billing(billing_id),
    CONSTRAINT fk_payment_invoice FOREIGN KEY (invoice_id) REFERENCES channel_invoice(invoice_id)
);
-- CREATE INDEX idx_payment_invoice_id ON payment (invoice_id);

-- CREATE TABLE channel_state (
--     transaction_id VARCHAR(255) PRIMARY KEY,
--     status VARCHAR(50) NOT NULL,
--     created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
--     updated_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
--     failure_reason TEXT NULL,
--     initial_payload JSON NOT NULL
-- );
