"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendEmail(request) {
        throw new Error("Method not implemented.");
    }
    sendMail({ to, message }) {
        console.log(`Email sent to ${to.name}: ${message.subject}`);
    }
}
exports.default = EmailService;
