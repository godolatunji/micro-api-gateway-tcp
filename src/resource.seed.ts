/* tslint:disable: no-console */
import { AuthorizationService } from './authorization/authorization.service';

export async function resourceSeed(application) {
  try {
    const authService = application.get(AuthorizationService);
    await authService.seedResources(application).toPromise();
    await authService.getSecretKey();
    setInterval(() => {
      authService.getResourcePermissions();
    }, 5000);
  } catch (err) {
    console.error('Error seeding resources >> ', err);
  }
}
