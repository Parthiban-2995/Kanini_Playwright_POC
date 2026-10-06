import { expect, test } from '@playwright/test';
import { loginViaApi } from '../../utils/apiAuth';
import { environment } from '../../utils/env';

test('create a pharmacy bill through the authenticated API', async () => {
  const apiContext = await loginViaApi();

  try {
    const addBillUrl = new URL('/admin/pharmacy/addBill', environment.baseUrl).toString();
    const response = await apiContext.post(addBillUrl, {
      multipart: {
        organisation_id: '',
        insurance_id: '',
        insurance_validity: '',
        patient_id: '1230',
        is_prescription_no: '',
        prescription_no: '',
        bill_no: '605',
        case_reference_id: '',
        date: '06/10/2026 03:35 PM',
        customer_name: '',
        action_type: 'insert',
        'total_rows[]': '1',
        medicine_name_id_1: '6',
        batch_no_id_1: '249',
        expire_date_1: 'Dec/2026',
        expiry_1: '2026-12-31',
        quantity_1: '1',
        available_quantity_1: '200',
        sale_rate_price_1: '',
        tpa_rate_1: '',
        sale_price_1: '200.00',
        tax_1: '0.00',
        mdiscount_1: '5',
        amount_1: '190.00',
        consultant_doctor: '',
        doctor_name: '',
        note: '',
        total: '190.00',
        discount_percent: '',
        discount: '0.00',
        tax: '0.00',
        net_amount: '190.00',
        payment_mode: 'Cash',
        payment_amount: '190.00',
        cheque_no: '',
        cheque_date: '',
        // No document was supplied; send an empty binary part for the optional upload.
        document: {
          name: 'document',
          mimeType: 'application/octet-stream',
          buffer: Buffer.alloc(0),
        },
      },
    });

    expect(response.ok()).toBeTruthy();
    const result = await response.json() as {
      status: number;
      error: string;
      message: string;
      insert_id: number;
    };

    expect(result.status).toBe(1);
    expect(result.error).toBe('');
    expect(result.message).toBe('Record Saved Successfully');
    expect(result.insert_id).toBeTruthy();
  } finally {
    await apiContext.dispose();
  }
});