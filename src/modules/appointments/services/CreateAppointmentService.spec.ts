import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentRepository';

import CreateAppointmentService from './CreateAppointmentService';

describe('Create Appointment', () => {
    it('should be able to create a new appointment', async () => {
        const fakeAppointmentsRepository = new FakeAppointmentsRepository();
        const createAppointment = new CreateAppointmentService(
            fakeAppointmentsRepository,
        );

        const appointment = await createAppointment.execute({
            date: new Date(),
            provider_id: '32313123',
        });

        expect(appointment).toHaveProperty('id');
        expect(appointment.provider_id).toBe('32313123');
    });

    // it('should not be able to create two apointments on the same time', () => {
    //     expect(1 + 2).toBe(3);
    // });
});
