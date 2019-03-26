import { buildFeatureInitialState as baseBuildFeatureInitialState }    from '@ceo/entity';

import { featureConfig }        from '../../config';

export function buildFeatureInitialState(): any {
  return baseBuildFeatureInitialState(featureConfig)
}
