import { SetMetadata } from '@nestjs/common';

/**
 * Decorator to mark a route as public (no JWT required)
 * Usage: @Public()
 */
export const Public = () => SetMetadata('isPublic', true);
