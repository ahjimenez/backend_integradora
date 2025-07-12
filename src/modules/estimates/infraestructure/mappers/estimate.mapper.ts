import { Estimate } from '../../domain/entities/estimate';
import { Prisma, Estimate as prismaEstimate } from 'generated/prisma';

export class EstimateMapper {
  static toDomain(prismaEstimate: prismaEstimate): Estimate {
    return new Estimate(
      prismaEstimate.id,
      prismaEstimate.id_property,
      prismaEstimate.estimate_number,
      prismaEstimate.send_date,
      prismaEstimate.expiration_date,
      prismaEstimate.acceptation_date,
      prismaEstimate.id_user,
      prismaEstimate.service_type,
      prismaEstimate.description,
      prismaEstimate.quantity,
      prismaEstimate.amount,
      prismaEstimate.tax_included,
      prismaEstimate.subtotal,
      prismaEstimate.tax_amount,
      prismaEstimate.total,
    );
  }

  static toPersistence(estimate: Estimate): prismaEstimate {
    return {
      id: estimate.id,
      id_property: estimate.id_property,
      estimate_number: estimate.estimate_number,
      send_date: estimate.send_date,
      expiration_date: estimate.expiration_date,
      acceptation_date: estimate.acceptation_date,
      id_user: estimate.id_user,
      service_type: estimate.service_type,
      description: estimate.description,
      quantity: estimate.quantity,
      amount: estimate.amount,
      tax_included: estimate.tax_included,
      subtotal: estimate.subtotal,
      tax_amount: estimate.tax_amount,
      total: estimate.total
    };
  }
}